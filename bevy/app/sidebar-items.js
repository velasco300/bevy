window.SIDEBAR_ITEMS = {"derive":[["AppLabel","Generates an impl of the `AppLabel` trait."],["DynamicPlugin","Generates a dynamic plugin entry point function for the given `Plugin` type."]],"enum":[["CoreSchedule","The names of the default [`App`] schedules."],["CoreSet","The names of the default [`App`] system sets."],["RunMode","Determines the method used to run an [`App`]’s `Schedule`."],["StartupSet","The names of the default [`App`] startup sets, which live in [`CoreSchedule::Startup`]."]],"mod":[["prelude",""]],"struct":[["App","A container of app logic and data."],["AppExit","An event that indicates the [`App`] should exit. This will fully exit the app process at the start of the next tick of the schedule."],["AppLabelId","A strongly-typed identifier for an [`AppLabel`]."],["AppTypeRegistry","The [`Resource`] that stores the [`App`]’s `TypeRegistry`."],["PluginGroupBuilder","Facilitates the creation and configuration of a [`PluginGroup`]. Provides a build ordering to ensure that [`Plugin`]s which produce/require a `Resource` are built before/after dependent/depending [`Plugin`]s. [`Plugin`]s inside the group can be disabled, enabled or reordered."],["ScheduleRunnerPlugin","Configures an [`App`] to run its `Schedule` according to a given [`RunMode`]."],["ScheduleRunnerSettings","The configuration information for the [`ScheduleRunnerPlugin`]."],["SubApp","A [`SubApp`] contains its own [`Schedule`] and [`World`] separate from the main [`App`]. This is useful for situations where data and data processing should be kept completely separate from the main application. The primary use of this feature in bevy is to enable pipelined rendering."],["SystemAppConfig","A `System` with `App`-aware scheduling metadata."],["SystemAppConfigs","A collection of [`SystemAppConfig`]s."]],"trait":[["AppLabel","A strongly-typed class of labels used to identify an [`App`]."],["IntoSystemAppConfig","Types that can be converted into a [`SystemAppConfig`]."],["IntoSystemAppConfigs","Types that can convert into [`SystemAppConfigs`]."],["Plugin","A collection of Bevy app logic and configuration."],["PluginGroup","Combines multiple [`Plugin`]s into a single unit."]],"type":[["CreatePlugin","A type representing an unsafe function that returns a mutable pointer to a [`Plugin`]. It is used for dynamically loading plugins."]]};