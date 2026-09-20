const tiers = [
  {
    name: 'BRONZE',
    bonus: '3%',
    days: '11',
    hours: '30',
    diamonds: '25K - 100K',
    accent: '#d7a85f',
    glow: 'rgba(215,168,95,0.18)',
    label: 'jours',
  },
  {
    name: 'SILVER',
    bonus: '4%',
    days: '15',
    hours: '40',
    diamonds: '100K - 200K',
    accent: '#c9d2dc',
    glow: 'rgba(201,210,220,0.12)',
    label: 'jours',
  },
  {
    name: 'GOLD',
    bonus: '5%',
    days: '22',
    hours: '80',
    diamonds: '200K+',
    accent: '#f5b942',
    glow: 'rgba(245,185,66,0.2)',
    label: 'jours',
  },
]

const diamondTiers = [
  { tier: 'Tier 1', required: '≥ 0', rankUp: '7.5%', maintain: '0%', notMaintained: '0%' },
  { tier: 'Tier 2', required: '≥ 100K', rankUp: '7.5%', maintain: '0%', notMaintained: '0%' },
  { tier: 'Tier 3', required: '≥ 200K', rankUp: '7.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 4', required: '≥ 300K', rankUp: '7.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 5', required: '≥ 500K', rankUp: '7.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 6', required: '≥ 700K', rankUp: '6.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 7', required: '≥ 1M', rankUp: '5.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 8', required: '≥ 1.6M', rankUp: '4.5%', maintain: '4%', notMaintained: '0%' },
  { tier: 'Tier 9', required: '≥ 2.5M', rankUp: '4%', maintain: '3.5%', notMaintained: '0%' },
  { tier: 'Tier 10', required: '≥ 5M', rankUp: '-', maintain: '3.5%', notMaintained: '0%' },
]

export default function Rewards() {
  return (
    <section id="rewards" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="aspar-rewards-shell">
          <div className="aspar-rewards-inner">
            <h2 className="aspar-main-title">
              HOW TO CALCULATE
              <span>YOUR BONUS</span>
            </h2>

            <p className="aspar-caption">YOUR WORK, YOUR PASSION, YOUR REWARD.</p>

            <div className="aspar-banner">
              BONUS DISTRIBUTION: FROM THE 15TH TO THE 25TH OF EACH MONTH
            </div>

            <div className="aspar-formula-box">
              <div className="aspar-formula-title">HOW IT WORKS</div>

              <div className="aspar-formula-row">
                <div className="aspar-formula-part">
                  <span className="aspar-formula-small">DIAMONDS</span>
                  <span className="aspar-formula-small muted">EARNED</span>
                  <span className="aspar-formula-sub">(WITHIN YOUR RANGE)</span>
                </div>

                <div className="aspar-formula-operator">×</div>

                <div className="aspar-formula-part">
                  <span className="aspar-formula-small">BONUS</span>
                  <span className="aspar-formula-small muted">RATE</span>
                  <span className="aspar-formula-sub">(BASED ON YOUR LEVEL)</span>
                </div>

                <div className="aspar-formula-operator">=</div>

                <div className="aspar-formula-part highlight">
                  <span className="aspar-formula-small">YOUR</span>
                  <span className="aspar-formula-small muted">BONUS</span>
                </div>
              </div>

              <div className="aspar-formula-example">
                <span>EXAMPLE:</span>
                <strong>150,000</strong>
                <span>DIAMONDS × 4% = 6,000</span>
                <span className="aspar-formula-example-note">(YOUR BONUS)</span>
              </div>
            </div>

            <div className="aspar-table-wrap">
              <div className="aspar-table-head">LEVELS AND CRITERIA</div>

              <div className="aspar-tier-grid">
                {tiers.map((tier) => (
                  <div key={tier.name} className="aspar-tier-card" style={{ '--tier-accent': tier.accent } as React.CSSProperties}>
                    <div className="aspar-tier-icon">✦</div>
                    <div className="aspar-tier-name">{tier.name}</div>
                    <div className="aspar-tier-bonus">{tier.bonus}</div>
                    <div className="aspar-tier-meta">
                      <div className="aspar-tier-meta-item">
                        <span className="aspar-tier-sort">☰</span>
                        <strong>{tier.days}</strong>
                        <small>{tier.label}</small>
                      </div>
                      <div className="aspar-tier-meta-item">
                        <span className="aspar-tier-clock">◔</span>
                        <strong>{tier.hours}</strong>
                        <small>HEURES</small>
                      </div>
                    </div>
                    <div className="aspar-tier-diamonds">{tier.diamonds}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspar-bottom-grid">
              <div className="aspar-notes-box">
                <div className="aspar-notes-title">IMPORTANT</div>
                <ul>
                  <li>Creators must hit the required days, hours worked, and diamonds within the month to qualify for the bonus.</li>
                  <li>Bonuses are calculated only on the diamonds earned within your level range.</li>
                  <li>Any fraudulent behavior will result in bonus removal.</li>
                </ul>
              </div>

              <div className="aspar-alert-box">
                <span>STAY CONSISTENT,</span>
                <span>STAY WINNING!</span>
              </div>
            </div>

            <div className="aspar-signature">NORDLYS</div>
            <div className="aspar-signature-caption">EXCELLENCE REWARDED</div>
          </div>
        </div>
      </div>
    </section>
  )
}
