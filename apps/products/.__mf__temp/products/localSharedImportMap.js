
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/products__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "@zenith/ui": async () => {
          let pkg = await import("__mf__virtual/products__prebuild___mf_0_zenith_mf_1_ui__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.1.1",
            scope: ["default"],
            loaded: false,
            from: "products",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.1.1"
            }
          }
        ,
          "@zenith/ui": {
            name: "@zenith/ui",
            version: "0.1.0",
            scope: ["default"],
            loaded: false,
            from: "products",
            async get () {
              usedShared["@zenith/ui"].loaded = true
              const {"@zenith/ui": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "0.1.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      