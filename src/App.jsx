import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import invitation from "./config/invitation";

import OpeningExperience from "./components/OpeningExperience";
import Hero from "./components/Hero";
import Parents from "./components/Parents";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Ultrasound from "./components/Ultrasound";
import Message from "./components/Message";
import Gifts from "./components/Gifts";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";
import Petals from "./components/decorative/Petals";
import UnicornMagic from "./components/decorative/UnicornMagic";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream font-body text-ink">
      <UnicornMagic className="fixed z-0 opacity-70" />
      <AnimatePresence>
        {!opened && (
          <OpeningExperience
            babyName={invitation.babyName}
            onOpen={() => setOpened(true)}
          />
        )}
      </AnimatePresence>

      {opened && (
        <main className="relative">
          <Petals className="opacity-20" />

          <Hero
            babyName={invitation.babyName}
            babyPhrase={invitation.babyPhrase}
            parents={invitation.parents}
            heroPhoto={invitation.photos.hero}
          />

          <Parents parents={invitation.parents} photo={invitation.photos.parents} />

          <Countdown babyName={invitation.babyName} isoDate={invitation.event.isoDate} />

          <div className="storybook-panel relative z-10 mx-auto max-w-xl px-3 py-5 sm:px-6">
            <EventDetails event={invitation.event} />

            <Location event={invitation.event} />
          </div>

          <Gallery babyName={invitation.babyName} photos={invitation.photos.gallery} />

          <Ultrasound babyName={invitation.babyName} photo={invitation.photos.ultrasound} />

          <Message title={invitation.message.title} body={invitation.message.body} />

          <Gifts gifts={invitation.gifts} />

          <Rsvp contact={invitation.contact} babyName={invitation.babyName} />

          <Footer babyName={invitation.babyName} parents={invitation.parents} />

          <MusicToggle music={invitation.music} armed={opened} />
        </main>
      )}
    </div>
  );
}
