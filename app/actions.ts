"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// Make sure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY)
const mail_prod = "antonio@mediterraneoinrosa.it"
const mail_test = "andrea.falbo56@gmail.com"

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const { name, email, message } = formData

  if (!name || !email || !message) {
    return { success: false, error: "Tutti i campi sono obbligatori." }
  }

  try {
    const data = await resend.emails.send({
      from: "Mediterraneo in Rosa <info@mediterraneoinrosa.it>", // Deve essere un indirizzo del TUO dominio verificato
      to: [mail_test],
      subject: `Nuovo messaggio da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
      replyTo: email, // Qui inseriamo la mail dell'utente, così quando fai "Rispondi" andrà a lui
    })

    if (data.error) {
      return { success: false, error: data.error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: "Si è verificato un errore durante l'invio del messaggio." }
  }
}
