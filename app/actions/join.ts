"use server"

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbztwhoRMulhm33lpJP3GW4oHInl9tBdVVk7zLDBkz-QV1n8iLHCEpF975fCcmcqa3Gg/exec"

export type State = {
  ok: boolean
  error?: string
}

export async function submit(_prev: State, formData: FormData): Promise<State> {
  const name    = String(formData.get("name")    ?? "").trim()
  const city    = String(formData.get("city")    ?? "").trim()
  const phone   = String(formData.get("phone")   ?? "").trim()
  const level   = String(formData.get("level")   ?? "").trim()

  if (!name || !city || !phone) {
    return { ok: false, error: "Please fill in all required fields." }
  }

  try {
    const body = new URLSearchParams({
      name,
      city,
      phone,
      level,
      timestamp: new Date().toISOString(),
    })

    const res = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
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
