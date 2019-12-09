import React from 'react';
import './LandingSpaces.scss';

const LandingSpaces = () => {
  return (
    <div>
      <div className='spaces'>
        <div className='left'>
          <img src='../../../images/sanctuary-bed.jpg' alt='Sanctuary side bedroom' />
          <h2>Sanctuary Shack</h2>
          <p>Our guest suite has been featured in major newspapers
          and on top design blogs such as Remodelista and Apartment
          Therapy and is available for short-term vacation and creative
          rentals. Plug in to the community and events at ModNomad,
          learn about collaborative opportunities, or settle in for some
          cozy and inspired quiet, to concentrate and recharge. The
          Sanctuary Shack offers views of Mt. Tam and the bay, with an
          ensuite bedroom/bath, open living room and kitchen area featuring
          the original GoGo Kitchen, a sunporch studio and deck. The space reflects
          our ModNomad design aesthetic of bringing beauty and purpose back to discarded
          materials, and features an eclectic mix of modern and vintage furniture
          along with an inspiring library and art collection. </p>
        </div>
        <div className='right'>
          <img src='../../../images/studio-kitchen.jpg' alt='' />
          <h2>The Studio</h2>
          <p>ModNomad Studio is a collaborative creative space and incubator, a
          way to interact with our community and beyond in meaningful ways. In
          these chaotic and confusing times, we felt called to do something and
          decided to start at home. As we restore this charming 1880's cottage
          on a hillside overlooking Mt. Tamalpais and Richardson Bay, we're offering
          subsidized and free live/work studios and communal space to social artists
          and activists, and women and families in crisis. We've become a gathering
          spot, too, hosting monthly house concerts and "cognitive potluck" salons as
          well as civic engagement and candidate events. ModNomad is also available to
          rent for film and product shoots.
          <br></br>
            <br></br>
            How will you use ModNomad? Tell us about your idea and we'll see how we can help.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingSpaces;