import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const data = await req.json()
        const { name, email, message } = data

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        // Aquí podrías integrar un servicio real (SendGrid, nodemailer, etc.)
        // Por ahora devolvemos éxito simulado.
        console.log('Contacto recibido:', { name, email, message })

        return NextResponse.json({ ok: true })
    } catch (err) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}
