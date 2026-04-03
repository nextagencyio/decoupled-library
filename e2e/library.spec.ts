import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Discover, Learn, Connect')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('185,000+')
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('nav a[href="/programs"]')).toBeVisible()
    await expect(page.locator('nav a[href="/events"]')).toBeVisible()
    await expect(page.locator('nav a[href="/about"]')).toBeVisible()
  })
})

test.describe('Branches', () => {
  test('listing page renders branch cards', async ({ page }) => {
    await page.goto('/branches')
    await expect(page.locator('h1')).toContainText('Branches')
    await expect(page.locator('body')).toContainText('Main Library')
    await expect(page.locator('body')).toContainText('Eastside Branch')
  })

  test('detail page renders branch info', async ({ page }) => {
    await page.goto('/branches/main-library')
    await expect(page.locator('h1')).toContainText('Main Library')
    await expect(page.locator('body')).toContainText('Address')
  })
})

test.describe('Programs', () => {
  test('listing page renders program cards', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    await expect(page.locator('body')).toContainText('Baby Storytime')
    await expect(page.locator('body')).toContainText('Teen Coding Club')
  })

  test('detail page renders program info', async ({ page }) => {
    await page.goto('/programs/baby-storytime')
    await expect(page.locator('h1')).toContainText('Baby Storytime')
  })
})

test.describe('Events', () => {
  test('listing page renders event cards', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.locator('body')).toContainText('Elena Torres')
  })

  test('detail page renders event info', async ({ page }) => {
    await page.goto('/events/author-visit-elena-torres')
    await expect(page.locator('h1')).toContainText('Elena Torres')
  })
})

test.describe('News', () => {
  test('listing page renders news cards', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.locator('body')).toContainText('Expanded Sunday Hours')
  })

  test('detail page renders news article', async ({ page }) => {
    await page.goto('/news/expanded-sunday-hours')
    await expect(page.locator('h1')).toContainText('Expanded Sunday Hours')
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Riverside Public Library')
    await expect(page.locator('body')).toContainText('Our Mission')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
  })
})
