import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Get in touch." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:princekenn.sorita@cit.edu" text="princekenn.sorita@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/princekennsorita22" text="github.com/princekennsorita22" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/princekennsorita" text="linkedin.com/in/princekennsorita" />
      </ul>
    </section>
  )
}

export default ContactSection
