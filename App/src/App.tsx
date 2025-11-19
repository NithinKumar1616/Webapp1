import { useState } from 'react'
import './App.css'
import { menuItems } from './data/menuData'
import type { MenuItem } from './data/menuData'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  // Filter menu items by category
  const filteredItems = selectedCategory === 'All' 
    ? menuItems.filter(item => item.available)
    : menuItems.filter(item => item.available && item.category === selectedCategory)

  // Get unique categories from menu items
  const availableCategories = ['All', ...new Set(menuItems.map(item => item.category))]

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">Nova</div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="https://restaurants.bakeit360.com/utilities/dr/XmUD8dViHIhL?r=267a487e-b65d-4f7e-965a-d7d44e3d5cf2&src=others" target="_blank" rel="noopener noreferrer">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Restaurant</h1>
            <p className="hero-subtitle">
              Experience the finest flavors crafted with passion and tradition
            </p>
            <div className="hero-buttons">
              <a href="https://restaurants.bakeit360.com/utilities/dr/XmUD8dViHIhL?r=267a487e-b65d-4f7e-965a-d7d44e3d5cf2&src=others" target="_blank" rel="noopener noreferrer" className="cta-button primary">View Menu</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p className="about-description">
                We are passionate about creating exceptional dining experiences. 
                Our commitment to quality ingredients, authentic flavors, and warm hospitality 
                has made us a beloved destination for food lovers.
              </p>
              <p className="about-description">
                Every dish tells a story, and we invite you to be part of ours. 
                Whether you're joining us for a casual meal or a special celebration, 
                we're here to make every moment memorable.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon">🍽️</div>
                  <h3>Fresh Ingredients</h3>
                  <p>Locally sourced, daily fresh</p>
                </div>
                <div className="about-feature">
                  <div className="feature-icon">👨‍🍳</div>
                  <h3>Expert Chefs</h3>
                  <p>Masterfully crafted dishes</p>
                </div>
                <div className="about-feature">
                  <div className="feature-icon">❤️</div>
                  <h3>Made with Love</h3>
                  <p>Every bite is special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Discover our carefully curated selection of dishes</p>
          
          <div className="menu-categories">
            {availableCategories.map((category) => (
              <button
                key={category}
                className={`menu-category ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="menu-item"
                onClick={() => setSelectedItem(item)}
              >
                <div className="menu-item-image">{item.image || '🍽️'}</div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{formatPrice(item.price)}</span>
                  </div>
                  <p className="menu-description">{item.description}</p>
                  {item.modifiers && item.modifiers.length > 0 && (
                    <div className="menu-modifiers-indicator">
                      <span className="modifier-badge">
                        {item.modifiers.length} customization{item.modifiers.length > 1 ? 's' : ''} available
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modifier Modal */}
          {selectedItem && (
            <div className="modifier-modal-overlay" onClick={() => setSelectedItem(null)}>
              <div className="modifier-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
                <h2>{selectedItem.name}</h2>
                <p className="modal-description">{selectedItem.description}</p>
                <div className="modal-base-price">Base Price: {formatPrice(selectedItem.price)}</div>
                
                {selectedItem.modifiers && selectedItem.modifiers.length > 0 && (
                  <div className="modifiers-list">
                    {selectedItem.modifiers.map((modifier) => (
                      <div key={modifier.id} className="modifier-group">
                        <h3 className="modifier-title">
                          {modifier.name}
                          {modifier.required && <span className="required-badge">Required</span>}
                        </h3>
                        <div className="modifier-options">
                          {modifier.options.map((option) => (
                            <label key={option.id} className="modifier-option">
                              <input
                                type={modifier.required ? 'radio' : 'checkbox'}
                                name={modifier.id}
                                value={option.id}
                              />
                              <span className="option-name">{option.name}</span>
                              {option.price > 0 && (
                                <span className="option-price">+{formatPrice(option.price)}</span>
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse of our delicious offerings</p>
          <div className="gallery-grid">
            <div className="gallery-item">🍕</div>
            <div className="gallery-item">🍝</div>
            <div className="gallery-item">🍰</div>
            <div className="gallery-item">🥗</div>
            <div className="gallery-item">🍔</div>
            <div className="gallery-item">🍹</div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="hours-location">
        <div className="container">
          <div className="hours-location-grid">
            <div className="hours-card">
              <h2>Opening Hours</h2>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Thursday</span>
                  <span className="time">11:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Friday - Saturday</span>
                  <span className="time">11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <h2>Find Us</h2>
              <div className="location-info">
                <p className="location-address">
                  <strong>📍 Address:</strong><br />
                  123 Main Street<br />
                  City, State 12345
                </p>
                <p className="location-phone">
                  <strong>📞 Phone:</strong><br />
                  (555) 123-4567
                </p>
                <p className="location-email">
                  <strong>✉️ Email:</strong><br />
                  info@restaurantname.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Reservation Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Reserve a Table</h2>
          <p className="section-subtitle">Book your dining experience with us</p>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" className="form-input" required />
                <input type="date" className="form-input" required />
              </div>
              <div className="form-row">
                <input type="time" className="form-input" required />
                <input type="number" placeholder="Number of Guests" className="form-input" min="1" required />
              </div>
              <textarea placeholder="Special Requests (Optional)" className="form-textarea" rows={4}></textarea>
              <button type="submit" className="submit-button">Reserve Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Nova</h3>
              <p>Creating memorable dining experiences since 2020</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="https://restaurants.bakeit360.com/utilities/dr/XmUD8dViHIhL?r=267a487e-b65d-4f7e-965a-d7d44e3d5cf2&src=others" target="_blank" rel="noopener noreferrer">Menu</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nova. All rights reserved.</p>
            <p className="powered-by">Powered by Nova</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
