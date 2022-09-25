import styled from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { categories } from '../../stub/categories'

import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { Banner } from './components/Banner'
import { AwardWinningSection } from './components/AwardWinningSection'
import { RestaurantsSection } from './components/RestaurantsSection/RestaurantsSection.container'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <Spacing />
      <RestaurantsSection title="Our favorites" />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
    </PageTemplate>
  )
}
