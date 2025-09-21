import { createFrames, Button } from 'frames.js/next';
import { NextRequest } from 'next/server';

const frames = createFrames();

const handler = frames(async (ctx) => {
  const { message } = ctx;

  let state = {
    page: 'home',
    crop: '',
    market: '',
    priceData: null,
  };

  try {
    if (message?.state) {
      state = JSON.parse(message.state as string);
    }
  } catch (e) {
    console.error('Error parsing state:', e);
  }

  // Handle different frame actions
  const buttonIndex = message?.buttonIndex || 0;

  if (buttonIndex === 1 && state.page === 'home') {
    // Get Started -> Price Discovery
    state.page = 'price-discovery';
  } else if (buttonIndex === 2 && state.page === 'price-discovery') {
    // Back to home
    state.page = 'home';
  } else if (buttonIndex === 3 && state.page === 'price-discovery') {
    // Get Price
    state.page = 'price-result';
  }

  let imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/og`;
  let buttons: any[] = [];

  if (state.page === 'home') {
    buttons = [
      {
        label: 'Get Started',
        action: 'post',
      },
    ];
  } else if (state.page === 'price-discovery') {
    buttons = [
      {
        label: 'Back',
        action: 'post',
      },
      {
        label: 'Get Price',
        action: 'post',
      },
    ];
  } else if (state.page === 'price-result') {
    buttons = [
      {
        label: 'Back',
        action: 'post',
      },
      {
        label: 'Find Buyers',
        action: 'post',
      },
    ];
  }

  return {
    image: imageUrl,
    buttons,
    state: JSON.stringify(state),
  };
});

export const POST = handler;
