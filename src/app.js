import { LandingModel } from './views/landing/landing.model'
import { LandingView } from './views/landing/landing.view'
import { LandingController } from './views/landing/landing.controller'

document.addEventListener('DOMContentLoaded', () => {
  const model = new LandingModel();
  const view = new LandingView();
  const controller = new LandingController(model, view);
});