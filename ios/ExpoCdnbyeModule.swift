import ExpoModulesCore

public class ExpoCdnbyeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoCdnbye")
    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
