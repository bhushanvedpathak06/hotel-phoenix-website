import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BedDouble, CalendarDays, CarFront, Check,
  ChevronDown, Clock3, Coffee, MapPin, Menu, Phone, Send, ShieldCheck,
  Star, Tv, Wifi, X, Waves, Utensils, Sparkles
} from 'lucide-react';

const hotel = {
  name: 'Hotel Phoenix International',
  address: '1st Floor, Shanawaz Building, Kale Marg, near Jain Paper Box Company, Kamani, Kurla West, Mumbai, Maharashtra 400070',
  maps: 'https://maps.app.goo.gl/jC2Y2BsGsZKfpZKr7',
  rating: '3.6',
  reviews: '419',
  checkIn: '2:00 PM',
};

const photos = [
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85', alt: 'Contemporary hotel bedroom' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85', alt: 'Comfortable guest room' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85', alt: 'Hotel exterior and pool' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85', alt: 'Hotel lounge' },
];

const amenities = [
  [Wifi, 'Complimentary Wi-Fi'], [Coffee, 'Breakfast'], [CarFront, 'Parking'],
  [Clock3, '24-hour front desk'], [Utensils, 'Room service'], [Waves, 'Pool*'],
  [Tv, 'Flat-screen TV'], [BedDouble, 'Air-conditioned rooms'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', checkIn: '', checkOut: '', guests: '2', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Hello, I would like to enquire about a stay at ${hotel.name}.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ACheck-in: ${encodeURIComponent(form.checkIn)}%0ACheck-out: ${encodeURIComponent(form.checkOut)}%0AGuests: ${encodeURIComponent(form.guests)}%0AMessage: ${encodeURIComponent(form.message)}`;
    // Replace this placeholder with the hotel's verified WhatsApp number before launch.
    const whatsappNumber = '';
    if (!whatsappNumber) { setSent(true); return; }
    window.open(`https://wa.me/${whatsappNumber}?text=${body}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="announcement"><Sparkles size={13}/> A welcoming stay in the heart of Kurla West, Mumbai <span>·</span> <a href={hotel.maps} target="_blank" rel="noreferrer">View location <ArrowUpRight size={12}/></a></div>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P</span><span><b>PHOENIX</b><small>INTERNATIONAL</small></span></a>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>The Hotel</a><a href="#rooms" onClick={closeMenu}>Stay</a><a href="#amenities" onClick={closeMenu}>Amenities</a><a href="#location" onClick={closeMenu}>Location</a>
        <a className="nav-cta" href="#enquire" onClick={closeMenu}>Enquire now <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade"/>
        <div className="hero-content">
          <div className="eyebrow light"><span/> YOUR MUMBAI STAY, MADE SIMPLE</div>
          <h1>A comfortable pause<br/><i>in the city that moves.</i></h1>
          <p>Discover a convenient base for your Mumbai visit at Hotel Phoenix International, Kurla West.</p>
          <div className="hero-actions"><a className="button button-light" href="#enquire">Plan your stay <ArrowRight size={17}/></a><a className="text-link light-link" href="#rooms">Explore the hotel <ArrowUpRight size={16}/></a></div>
          <div className="hero-note"><span className="rating-stars">★★★★★</span><b>{hotel.rating}/5</b><span>Google rating</span><span className="note-divider"/> <b>{hotel.reviews}</b><span>reviews</span></div>
        </div>
        <div className="hero-side-label">KURLA WEST · MUMBAI</div>
      </section>

      <section className="quick-facts">
        <div><span className="fact-icon"><MapPin/></span><span><small>FIND US</small><b>Kurla West, Mumbai</b></span></div>
        <div><span className="fact-icon"><Clock3/></span><span><small>CHECK-IN</small><b>{hotel.checkIn}</b></span></div>
        <div><span className="fact-icon"><ShieldCheck/></span><span><small>GUEST SUPPORT</small><b>Contact the front desk</b></span></div>
        <a href="#enquire" className="fact-link">Make an enquiry <ArrowUpRight size={17}/></a>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">WELCOME TO PHOENIX</div>
        <div className="intro-grid"><h2>A practical city stay,<br/><i>with comfort in mind.</i></h2><div className="intro-copy"><p>Whether you're visiting Mumbai for work, a quick city break, or to be close to the Kurla neighbourhood, Hotel Phoenix International offers a straightforward place to settle in.</p><p>Explore the property, check the location, and send a direct enquiry to plan your visit.</p><a className="underlined-link" href={hotel.maps} target="_blank" rel="noreferrer">Explore our location <ArrowUpRight size={16}/></a></div></div>
      </section>

      <section className="gallery-section" id="rooms">
        <div className="section-head"><div><div className="section-kicker">A LOOK AROUND</div><h2>Spaces to <i>unwind.</i></h2></div><p>Take a look at the spaces and plan the stay that works for you.</p></div>
        <div className="gallery">
          <button className="gallery-main" onClick={() => setLightbox(0)}><img src={photos[0].src} alt={photos[0].alt}/><span>Explore the stay <ArrowUpRight size={16}/></span></button>
          <button onClick={() => setLightbox(1)}><img src={photos[1].src} alt={photos[1].alt}/></button>
          <button onClick={() => setLightbox(2)}><img src={photos[2].src} alt={photos[2].alt}/></button>
          <button onClick={() => setLightbox(3)}><img src={photos[3].src} alt={photos[3].alt}/></button>
        </div>
        <p className="photo-disclaimer">Illustrative hotel imagery. Replace with verified photographs of the property before publishing.</p>
      </section>

      <section className="amenities section" id="amenities">
        <div className="amenities-top"><div><div className="section-kicker">THOUGHTFUL CONVENIENCES</div><h2>What makes a stay<br/><i>feel easier.</i></h2></div><p>Based on publicly listed property information. Please confirm current availability with the hotel before booking.</p></div>
        <div className="amenity-grid">{amenities.map(([Icon, label]) => <div className="amenity" key={label}><Icon size={21}/><span>{label}</span></div>)}</div>
        <p className="fine-print">*Pool and other facilities are subject to on-site confirmation. Amenities may vary by room and availability.</p>
      </section>

      <section className="review-band">
        <div className="review-inner"><div className="review-symbol">“</div><div><div className="section-kicker light-kicker">GUEST FEEDBACK</div><h2>Rated by guests<br/><i>who've stayed.</i></h2><p>Google listing rating</p></div><div className="review-score"><strong>{hotel.rating}</strong><span className="rating-stars">★★★★★</span><small>OUT OF 5 · {hotel.reviews} REVIEWS</small><a href={hotel.maps} target="_blank" rel="noreferrer">Read guest reviews <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="location section" id="location">
        <div className="location-copy"><div className="section-kicker">IN THE NEIGHBOURHOOD</div><h2>Well placed for<br/><i>getting around.</i></h2><p>Find us in Kamani, Kurla West, with city connections and local conveniences within reach.</p><div className="address"><MapPin size={20}/><span>{hotel.address}</span></div><a className="button button-dark" href={hotel.maps} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17}/></a></div>
        <a className="map-card" href={hotel.maps} target="_blank" rel="noreferrer"><div className="map-art"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><div className="map-pin"><MapPin size={25} fill="currentColor"/></div><div className="map-label">HOTEL PHOENIX<br/>INTERNATIONAL</div><span className="map-tag">KURLA WEST, MUMBAI</span></div><span className="map-open">Open in Google Maps <ArrowUpRight size={16}/></span></a>
      </section>

      <section className="enquiry-section" id="enquire">
        <div className="enquiry-intro"><div className="section-kicker light-kicker">LET'S PLAN YOUR VISIT</div><h2>Your Mumbai stay<br/><i>starts here.</i></h2><p>Share a few details and the hotel team can help with room availability, rates, and booking information.</p><div className="enquiry-contact"><Phone size={18}/><span>Need help? Contact the hotel directly.</span></div></div>
        <form className="enquiry-form" onSubmit={submit}>
          <div className="form-title">Send a booking enquiry <span>All fields marked * are required</span></div>
          <label>Your name *<input name="name" value={form.name} onChange={update} required placeholder="Enter your name"/></label>
          <label>Phone number *<input name="phone" value={form.phone} onChange={update} required type="tel" placeholder="+91"/></label>
          <div className="form-row"><label>Check-in *<input name="checkIn" type="date" value={form.checkIn} onChange={update} required/></label><label>Check-out *<input name="checkOut" type="date" value={form.checkOut} onChange={update} required min={form.checkIn || undefined}/></label></div>
          <label>Guests<select name="guests" value={form.guests} onChange={update}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5+">5+ guests</option></select></label>
          <label>Anything else? <textarea name="message" value={form.message} onChange={update} placeholder="Room preference or questions (optional)" rows="3"/></label>
          <button className="button button-gold" type="submit">Submit enquiry <Send size={16}/></button>
          {sent && <p className="form-feedback">Your enquiry details are ready. The hotel's verified contact / WhatsApp number needs to be added by the site owner before messages can be sent.</p>}
          <small className="privacy-note">This demo form does not store or transmit your personal information.</small>
        </form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">P</span><span><b>PHOENIX</b><small>INTERNATIONAL</small></span></a><p>Hotel Phoenix International · Kurla West, Mumbai</p><div><a href="#about">About</a><a href="#location">Location</a><a href="#enquire">Enquire</a></div><small>© {new Date().getFullYear()} Hotel Phoenix International. Website concept.</small></footer>

    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button aria-label="Close image" onClick={() => setLightbox(null)}><X/></button><img src={photos[lightbox].src} alt={photos[lightbox].alt}/></div>}
  </div>;
}

export default App;