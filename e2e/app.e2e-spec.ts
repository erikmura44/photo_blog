import { PhotoBlogPage } from './app.po';

describe('photo-blog App', function() {
  let page: PhotoBlogPage;

  beforeEach(() => {
    page = new PhotoBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
