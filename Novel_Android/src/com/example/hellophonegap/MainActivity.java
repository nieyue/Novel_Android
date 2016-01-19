package com.example.hellophonegap;

import org.apache.cordova.CordovaActivity;
import android.os.Bundle;

public class MainActivity extends CordovaActivity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.init();
		super.loadUrl("file:///android_asset/WWW/index.html");
	}

}
