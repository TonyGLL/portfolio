'use client'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Contact</h3>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <label className="block mb-3">
          <span className="text-sm text-muted-text">Name</span>
          <input required value={name} onChange={e => setName(e.target.value)}
                 className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </label>

        <label className="block mb-3">
          <span className="text-sm text-muted-text">Email</span>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                 className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </label>

        <label className="block mb-3">
          <span className="text-sm text-muted-text">Message</span>
          <textarea required value={message} onChange={e => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </label>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={status==='sending'} className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <div>
            {status === 'success' && <span className="text-sm text-green-600">Mensaje enviado!</span>}
            {status === 'error' && <span className="text-sm text-red-600">Error, intenta de nuevo.</span>}
          </div>
        </div>
      </form>
    </section>
  )
}
