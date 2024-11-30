var image = getImage({
  width: PixelRatio.getPixelSizeForLayoutSize(200),
  height: PixelRatio.getPixelSizeForLayoutSize(100)
});
<Image source={image} style={{ width: 200, height: 100 }} />;
