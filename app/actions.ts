"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const { name, email, message } = formData

  if (!name || !email || !message) {
    return { success: false, error: "Tutti i campi sono obbligatori." }
  }

  const envEmails = process.env.MAIL

  if (!envEmails) {
    console.error("Errore: Variabile d'ambiente MAIL_DESTINATARI non configurata.")
    return { success: false, error: "Configurazione del server incompleta." }
  }

  const recipients = envEmails.split(",").map((e) => e.trim())

  try {
    const data = await resend.emails.send({
      from: "Mediterraneo in Rosa <info@mediterraneoinrosa.it>",
      to: recipients,
      subject: `Nuovo messaggio da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
      replyTo: email,
    })

    if (data.error) {
      return { success: false, error: data.error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Errore Resend:", error)
    return { success: false, error: "Si è verificato un errore durante l'invio del messaggio." }
  }
}