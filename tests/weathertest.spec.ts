import { test, expect, request } from '@playwright/test';

test('Get current weather for Islamabad and validate response', async ({ request }) => {
  const apiKey = 'f34dd63175c0ab3be258c0963f69e2db';

  const response = await request.get(`https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${apiKey}&units=metric`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(`🌡️ Temperature in Islamabad: ${body.main.temp}°C`);

  expect(body.name).toBe('Islamabad'); 
  expect(typeof body.main.temp).toBe('number'); 
});
