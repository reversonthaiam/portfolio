import { useState } from "react";
import { Mail, Send, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="my-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos conversar
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir sobre ele.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group p-6 rounded-md bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    reversonthayan@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-md bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Goiania, Goiás - Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-md bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Availability
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-md bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
              <p className="text-foreground font-medium mb-2">
                Do you prefer something more direct?
              </p>
              <p className="text-muted-foreground text-sm">
                Send me an email directly to{" "}
                <a
                  href="mailto:reversonthayan@gmail.com"
                  className="text-primary hover:underline"
                >
                  reversonthayan@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-md bg-card border border-border">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 w-full bg-background border rounded-md focus:border-primary px-2"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 w-full bg-background border rounded-md focus:border-primary px-2"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me something :)"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-40 w-full px-2 py-2 border rounded-md focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md w-full h-12 text-base font-medium bg-primary cursor-pointer"
                  >
                    <Send size={18} className="mr-2" />
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
