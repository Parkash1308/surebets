import React, { useState } from 'react';
import styles from './LandingPage.module.css';
import Button from '../../components/common/Button/Button.jsx'; // Corrected Button path (assuming common is directly under src)
import StateSelector from '../../components/layout/Header/StateSelector.jsx'; // Corrected StateSelector path (assuming it's directly under layout)
import { FaUserCircle, FaCheckCircle, FaChartLine, FaChevronDown } from 'react-icons/fa'; // Added FaChevronDown
import { MdOutlineMail } from 'react-icons/md'; // Example for email icon
import { FaLock } from 'react-icons/fa'; // For the profit module icon

// Placeholder images - you'll need to create these files in assets/images/
// import phoneMockup from '../../assets/images/phoneMockup.png'; // REMOVED
// If you have a logo image, import it here:
import logo from '../../assets/images/logo.svg'; // Assuming you have a logo.svg in assets/images/

const LandingPage = () => {
    const [selectedState, setSelectedState] = useState('NJ');
    const [isStateSelectorOpen, setIsStateSelectorOpen] = useState(false);

    const handleStateSelect = (state) => {
        setSelectedState(state);
        setIsStateSelectorOpen(false);
    };

    return (
        <main className={styles.landingPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <p className={styles.trustIndicator}><FaUserCircle className={styles.trustIcon} /> Trusted by 100k+ bettors worldwide</p>
                    <h1 className={styles.heroTitle}>Make $500-$1000+ weekly. <span className={styles.highlight}>Use math, not luck.</span></h1>
                    <p className={styles.heroSubtitle}>Get data-backed {selectedState} bets sent daily for free.</p>

                    <div className={styles.ctaForm}>
                        <div className={styles.inputWrapper}>
                            <MdOutlineMail className={styles.inputIcon} />
                            <input type="email" placeholder="Your email..." className={styles.emailInput} />
                        </div>

                        <div className={styles.stateSelectorWrapper}>
                            <div className={styles.stateSelectorTrigger} onClick={() => setIsStateSelectorOpen(!isStateSelectorOpen)}>
                                <span>{selectedState}</span>
                                <FaChevronDown className={styles.arrowIcon} />
                            </div>
                            {isStateSelectorOpen && (
                                <StateSelector
                                    selectedState={selectedState}
                                    onSelectState={handleStateSelect}
                                    onClose={() => setIsStateSelectorOpen(false)}
                                />
                            )}
                        </div>
                        <Button variant="primary" size="large">Send me free bets</Button>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    {/* Placeholder for Profit Module - now with a lock icon */}
                    <div className={styles.profitModule}>
                        <FaLock className={styles.lockIcon} /> {/* Using FaLock from react-icons/fa */}
                        <h3>See how much money you can make with OddsJam</h3>
                        <Button variant="primary">Estimate your profit</Button>
                    </div>
                </div>
            </section>

            {/* Main Content / Tools Showcase Section */}
            <section className={styles.toolsShowcaseSection}>
                <div className={styles.leftSidebar}>
                    <div className={styles.sidebarHeader}>
                        <img src={logo} alt="OddsJam Logo" className={styles.sidebarLogo} />
                        <div className={styles.sidebarTabs}>
                            <button className={`${styles.sidebarTab} ${styles.active}`}>SPORTS BETTING</button>
                            <button className={styles.sidebarTab}>FANTASY</button>
                        </div>
                    </div>
                    <ul className={styles.sidebarNav}>
                        <li className={styles.sidebarNavItem}>
                            <a href="#" className={styles.sidebarNavLink}>
                                <FaChartLine className={styles.sidebarIcon} /> Arbitrage Bets
                                <span className={styles.percentage}>2.93%</span>
                            </a>
                        </li>
                        <li className={styles.sidebarNavItem}>
                            <a href="#" className={styles.sidebarNavLink}>
                                <FaChartLine className={styles.sidebarIcon} /> Positive EV
                            </a>
                        </li>
                        <li className={styles.sidebarNavItem}>
                            <a href="#" className={styles.sidebarNavLink}>
                                <FaChartLine className={styles.sidebarIcon} /> Middels
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.mainContentArea}>
                    <div className={styles.tableHeader}>
                        <h2>Arbitrage Bets</h2>
                        <div className={styles.tableFilters}>
                            <button className={`${styles.filterButton} ${styles.active}`}>Pre-match</button>
                            <button className={styles.filterButton}>500</button>
                            <button className={styles.filterButton}>Live <FaLock className={styles.lockIconSmall} /></button> {/* Using FaLock here too */}
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <table className={styles.dataTablet}>
                            <thead>
                                <tr>
                                    <th>ARB % ↑</th>
                                    <th>EVENT</th>
                                    <th>BET NAME</th>
                                    <th>BET & BOOKS</th>
                                    <th>1-CLICK BET</th>
                                    <th>NO-VIG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2.93%</td>
                                    <td>Buffalo Bills vs Los Angeles Rams Football | NFL</td>
                                    <td>Player Rushing Yards</td>
                                    <td>
                                        <div className={styles.betBooks}>
                                            <span>DraftKings: -180</span>
                                            <span>FanDuel: +205</span>
                                        </div>
                                    </td>
                                    <td><Button variant="primary" size="small">BET ↗</Button></td>
                                    <td>-175</td>
                                </tr>
                                <tr>
                                    <td>1.50%</td>
                                    <td>NBA Game: Teams X vs Teams Y</td>
                                    <td>Player Points Over/Under</td>
                                    <td>
                                        <div className={styles.betBooks}>
                                            <span>BetMGM: +150</span>
                                            <span>Caesars: -160</span>
                                        </div>
                                    </td>
                                    <td><Button variant="primary" size="small">BET ↗</Button></td>
                                    <td>-155</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMOVED: Phone Mockup Container */}
                {/*
                <div className={styles.phoneMockupContainer}>
                    <img src={phoneMockup} alt="OddsJam Mobile App" className={styles.phoneMockupImage} />
                </div>
                */}
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>7 Day Free Trial</span>
                </div>
                <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Free 1:1 Coaching</span>
                </div>
                <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>150+ Sportsbooks</span>
                </div>
                <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Industry's Fastest Data</span>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;