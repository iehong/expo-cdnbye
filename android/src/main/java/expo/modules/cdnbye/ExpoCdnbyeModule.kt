package expo.modules.cdnbye

import android.util.Log
import com.p2pengine.sdk.P2pEngine
import expo.modules.core.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoCdnbyeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoCdnbye")
    Function("parseStreamUrl") { url: String ->
      return@Function P2pEngine.instance!!.parseStreamUrl(url)
    }
  }
}
