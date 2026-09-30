import SectionHeading from './SectionHeading'
import Fact from './Fact'

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A bit about me." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Minglanilla and moved to Cebu City for college. I chose IT because I
        wanted to create and build software and learn more about technology.  I enjoy learning new things 
        and turning what I learn into something useful.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}

export default AboutSection
