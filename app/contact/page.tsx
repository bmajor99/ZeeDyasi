"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-12 text-center">CONTACT</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 tracking-wider">GET IN TOUCH</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">EMAIL</h3>
                <p className="opacity-80">parismarktoon@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">PHONE</h3>
                <p className="opacity-80">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">LOCATION</h3>
                <p className="opacity-80">New York, NY</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">SOCIAL</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/your-username"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="https://twitter.com/your-username"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    TWITTER
                  </a>
                  <a
                    href="https://facebook.com/your-username"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 border ${
                  submitStatus.type === "success" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-transparent border-border text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold tracking-wider disabled:opacity-50"
              >
                {isLoading ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
