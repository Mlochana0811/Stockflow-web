import React from 'react'
import Card from '../card'

import Button from '../Button'

import { Button as ShadCNButton } from "../ui/button";
function Home() {
  return (
    <div>Home
        <Card content="Card 1" />
        <Card content="Card 2" />

        <Button />

        <ShadCNButton>Ok</ShadCNButton>
        <ShadCNButton>Cancel</ShadCNButton>
    </div>
  )
}

export default Home