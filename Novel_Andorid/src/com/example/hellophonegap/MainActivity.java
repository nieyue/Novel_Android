package com.example.hellophonegap;

import com.phonegap.DroidGap;
import android.os.Bundle;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/WWW/index.html");
	}

}
