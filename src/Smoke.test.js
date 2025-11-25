// src/smoke.test.js
import { render } from '@testing-library/react';
import React from 'react';



// Smoke Test : vérifie juste que le composant se monte sans planter
test('Smoke Test: DummyApp se charge sans planter', () => {
  render(<DummyApp />);
});
