(function() {var implementors = {};
implementors["frame_support_test"] = [{"text":"impl&lt;Output:&nbsp;Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, T&gt; Randomness&lt;Output, &lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"frame_support_test/struct.TestRandomness.html\" title=\"struct frame_support_test::TestRandomness\">TestRandomness</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Config,&nbsp;</span>","synthetic":false,"types":["frame_support_test::TestRandomness"]}];
implementors["node_template_runtime"] = [];
implementors["pallet_babe"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; Randomness&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.RandomnessFromTwoEpochsAgo.html\" title=\"struct pallet_babe::RandomnessFromTwoEpochsAgo\">RandomnessFromTwoEpochsAgo</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::randomness::RandomnessFromTwoEpochsAgo"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; Randomness&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.RandomnessFromOneEpochAgo.html\" title=\"struct pallet_babe::RandomnessFromOneEpochAgo\">RandomnessFromOneEpochAgo</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::randomness::RandomnessFromOneEpochAgo"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; Randomness&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>&gt;, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.ParentBlockRandomness.html\" title=\"struct pallet_babe::ParentBlockRandomness\">ParentBlockRandomness</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::randomness::ParentBlockRandomness"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; Randomness&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>&gt;, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.CurrentBlockRandomness.html\" title=\"struct pallet_babe::CurrentBlockRandomness\">CurrentBlockRandomness</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::randomness::CurrentBlockRandomness"]}];
implementors["pallet_randomness_collective_flip"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_randomness_collective_flip/pallet/trait.Config.html\" title=\"trait pallet_randomness_collective_flip::pallet::Config\">Config</a>&gt; Randomness&lt;&lt;T as Config&gt;::Hash, &lt;T as Config&gt;::BlockNumber&gt; for <a class=\"struct\" href=\"pallet_randomness_collective_flip/pallet/struct.Pallet.html\" title=\"struct pallet_randomness_collective_flip::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_randomness_collective_flip::pallet::Pallet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()