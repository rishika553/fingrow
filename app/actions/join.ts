"use server"

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbztwhoRMulhm33lpJP3GW4oHInl9tBdVVk7zLDBkz-QV1n8iLHCEpF975fCcmcqa3Gg/exec"

export type State = {
  ok: boolean
  error?: string
}

export async function submit(_prev: State, formData: FormData): Promise<State> {
  const name = String(formData.get("name") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const stage = String(formData.get("stage") ?? "").trim()

  if (!name || !phone) {
    return { ok: false, error: "Please fill in your name and WhatsApp number." }
  }

  try {
    const body = new URLSearchParams({
      name,
      phone,
      stage,
      timestamp: new Date().toISOString(),
    })

    const res = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      // Apps Script returns a redirect to its CDN; follow it.
      redirect: "follow",
    })

    if (!res.ok) {
      return { ok: false, error: "Something went wrong. Please try again." }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: "Network error. Please try again." }
  }
}
