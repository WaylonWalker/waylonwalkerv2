import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Image from '../components/image-sm'

const SubscribeFormStyle = styled.div`
  /* .email-octopus-form-wrapper { */
  transition: transform 2s ease-in-out;
  margin: 5rem auto;
  max-width: 500px;
  padding: 2rem 5rem 1rem;
  background: linear-gradient(81deg, rgba(40, 44, 52, 1) 0%, #3e3846 100%);
  box-shadow: -8rem -6rem 8rem -6rem rgba(253, 221, 88, 0.2),
    4rem 0 8rem rgba(88, 82, 185, 0.3),
    0rem 0rem 2rem -1.6rem rgba(255, 215, 70, 0.8);
  color: #d68fbb;
  /* } */
  button {
    display: block;
    background: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    border-radius: 5px;
    background: linear-gradient(
      120deg,
      hsla(323deg, 100%, 90%, 1) 0%,
      #d68fbb 50%
    );
    font-size: 1.5rem;
    color: #2b2e37;
    margin: auto;
    margin-right: 4rem;
    transform: rotate(5deg);
  }

  button:hover {
    transition: transform 200ms ease-in-out;
    /* padding: .5rem .75rem !important; */
    background: linear-gradient(
      120deg,
      hsla(323deg, 100%, 85%, 1) 0%,
      #d68fbb 50%
    );
    transform: rotate(3deg) scale(1.1);
  }

  label {
    transition: transform 100ms cubic-bezier(0.31, 0.47, 0.76, 1.23);
  }
  label: hover {
    transform: rotate(1deg);
  }

  .email-octopus-form-wrapper h2 {
    transition: transform 200ms ease-in-out;
    transform: rotate(-3deg);
    font-size: 1.5rem;
    margin: 0 0 25px;
  }

  .email-octopus-form-wrapper h2:hover {
    transform: rotate(-2deg) scale(1.2);
  }

  .email-octopus-form-row {
    margin-bottom: 15px;
  }

  .email-octopus-form-row label {
    display: block;
  }

  .email-octopus-form-row input {
    width: 100%;
    max-width: 400px;
    padding: 8px;
    height: 32px;
    border: 1px solid #ccc;
  }

  .email-octopus-form-row-consent {
    margin-top: 20px;
  }

  .email-octopus-form-row-consent label {
    vertical-align: top;
  }

  .email-octopus-form-row-subscribe {
    margin-top: 20px;
    margin-left: 4rem;
  }

  .email-octopus-form-row-subscribe button {
    background-color: #e0e0e0;
    padding: 6px 12px;
    border: 0;
    font-weight: 700;
  }

  .email-octopus-form-row-hp {
    position: absolute;
    left: -5000px;
  }

  .email-octopus-error-message {
    color: #e74c3c;
  }

  .email-octopus-referral,
  .email-octopus-rewards {
    margin-top: 20px;
  }
`

const WIPStyle = styled.div`
  max-width: 400px;
  margin: auto;
  border: 4px solid salmon;
  padding: 2rem 1rem;
  background: linear-gradient(81deg, rgba(40, 44, 52, 1) 0%, #3e3846 100%);
  box-shadow: -8rem -6rem 8rem -6rem rgba(253, 221, 88, 0.2),
    4rem 0 8rem rgba(88, 82, 185, 0.3),
    0rem 0rem 2rem -1.6rem rgba(255, 215, 70, 0.8);
  color: #d68fbb;
`
const WIP = () => (
  <WIPStyle>
    <h2>⚠ Work in progress ⚠</h2>
    <p>
      appologies for the inconvenience, but this page is still a bit of a work
      in progress. If you dont see a little white ♻recaptcha logo at the bottom
      right corner, <strong>refresh</strong> and it should pop up.
    </p>
  </WIPStyle>
)

const SubscribeForm = () => (
  <>
    <SubscribeFormStyle>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://emailoctopus.com/bundles/emailoctopuslist/css/formEmbed.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/recaptcha.js"></script>
        <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/formEmbed.js"></script>
      </Helmet>
      <Image />
      <div className="email-octopus-form-wrapper">
        <h2 className="email-octopus-heading">Join My Newsletter</h2>
        <p className="email-octopus-success-message" />
        <p className="email-octopus-error-message" />
        <form
          method="post"
          action="https://emailoctopus.com/lists/b194a4af-9875-11ea-a3d0-06b4694bee2a/members/embedded/1.3s/add"
          className="email-octopus-form"
          data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
        >
          <div className="email-octopus-form-row">
            <label htmlFor="field_0">Email address</label>
            <input
              aria-label="email"
              id="field_0"
              name="field_0"
              type="email"
              placeholder
            />
          </div>
          <div className="email-octopus-form-row">
            <label htmlFor="field_1">First name</label>
            <input
              aria-label="first name"
              id="field_1"
              name="field_1"
              type="text"
              placeholder
            />
          </div>
          <div className="email-octopus-form-row">
            <label htmlFor="field_2">Last name</label>
            <input
              aria-label="last name"
              id="field_2"
              name="field_2"
              type="text"
              placeholder
            />
          </div>
          <div className="email-octopus-form-row-hp" aria-hidden="true">
            {/* Do not remove this field, otherwise you risk bot sign-ups */}
            <input
              aria-label="anti bot"
              type="text"
              name="hpb194a4af-9875-11ea-a3d0-06b4694bee2a"
              tabIndex={-1}
              autoComplete="nope"
            />
          </div>
          <div className="email-octopus-form-row-subscribe">
            <input
              aria-label="subscribe"
              type="hidden"
              name="successRedirectUrl"
              value="https://waylonwalker.com/ty"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </SubscribeFormStyle>
    <WIP />
  </>
)

export default SubscribeForm
