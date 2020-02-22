import React from 'react'
import { i18n,withTranslation, Link } from '../i18n'
import PropTypes from 'prop-types'

const ExploreView = ({ t }) => (
    <React.Fragment>
      <main>
       
        <Link href='/'>
          <button
            type='button'
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
          >
           {t('change-locale')}
          </button>
        </Link>
      </main>
    </React.Fragment>
  )

  ExploreView.getInitialProps = async () => ({
    namespacesRequired: ['second-page'],
  })

  ExploreView.propTypes = {
    t: PropTypes.func.isRequired,
  }

  export default withTranslation('second-page')(ExploreView)