package com.facebook.react.views.view;

import android.graphics.drawable.Drawable;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.PixelFormat;
import androidx.annotation.Nullable;

/**
 * Minimal shim for ReactViewBackgroundDrawable used by react-native-shared-element.
 * This implements the methods used by RNSharedElementDrawable so the library compiles on newer
 * React Native versions where the original class may not be present or has moved.
 *
 * This implementation focuses on drawing a simple background color and rounded corners.
 * Border rendering is a no-op (kept for API compatibility).
 */
public class ReactViewBackgroundDrawable extends Drawable {
  private final Paint mPaint;
  private int mColor = 0x00000000;
  private final float[] mRadius = new float[4];
  private final float[] mBorderWidth = new float[4];
  private final float[] mBorderColorRGB = new float[4];
  private final float[] mBorderColorAlpha = new float[4];
  private String mBorderStyle = "solid";

  public ReactViewBackgroundDrawable(Context context) {
    mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
  }

  public void setColor(int color) {
    mColor = color;
    invalidateSelf();
  }

  public void setBorderStyle(String style) {
    if (style != null) mBorderStyle = style;
  }

  public void setBorderColor(int index, float colorRGB, float colorAlpha) {
    if (index >= 0 && index < 4) {
      mBorderColorRGB[index] = colorRGB;
      mBorderColorAlpha[index] = colorAlpha;
    }
  }

  public void setBorderWidth(int index, float width) {
    if (index >= 0 && index < 4) {
      mBorderWidth[index] = width;
    }
  }

  public void setRadius(float radius, int index) {
    if (index >= 0 && index < 4) {
      mRadius[index] = radius;
    }
  }

  @Override
  public void draw(Canvas canvas) {
    Rect bounds = getBounds();
    mPaint.setColor(mColor);

    // Use the max radius for a simple rounded-rect draw
    float r = 0f;
    for (float rad : mRadius) {
      if (rad > r) r = rad;
    }

    if (r > 0f) {
      RectF rf = new RectF(bounds);
      canvas.drawRoundRect(rf, r, r, mPaint);
    } else {
      canvas.drawRect(bounds, mPaint);
    }

    // Note: border drawing is intentionally omitted for simplicity. This shim exists
    // to provide minimal compatibility so the project can compile. If you need exact
    // border rendering for shared element transitions, consider using a maintained
    // fork of react-native-shared-element or implementing full border drawing here.
  }

  @Override
  public void setAlpha(int alpha) {
    mPaint.setAlpha(alpha);
    invalidateSelf();
  }

  @Override
  public void setColorFilter(@Nullable ColorFilter colorFilter) {
    mPaint.setColorFilter(colorFilter);
    invalidateSelf();
  }

  @Override
  public int getOpacity() {
    return PixelFormat.TRANSLUCENT;
  }
}
