package expo.modules.cdnbye;

import android.app.Activity;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;

import com.p2pengine.core.p2p.P2pConfig;
import com.p2pengine.core.tracking.TrackerZone;
import com.p2pengine.sdk.P2pEngine;

import expo.modules.core.interfaces.ReactActivityLifecycleListener;

public class MyLibReactActivityLifecycleListener implements ReactActivityLifecycleListener {
  @Override
  public void onCreate(Activity activity, Bundle savedInstanceState) throws PackageManager.NameNotFoundException {
    var config = new P2pConfig.Builder().trackerZone(TrackerZone.HongKong).insertTimeOffsetTag(0.0).build();
    var info = activity.getPackageManager().getApplicationInfo(activity.getApplicationInfo().packageName, PackageManager.GET_META_DATA);
    var token = info.metaData.getString("CDNBYE_TOKEN");
    P2pEngine.init(activity.getApplicationContext(), token, config);
  }
}