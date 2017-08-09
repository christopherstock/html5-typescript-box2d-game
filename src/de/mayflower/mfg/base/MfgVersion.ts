
    /**************************************************************************************
    *   Contains the project history with all current and completed version information.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    **************************************************************************************/
    export class MfgVersion
    {
        /** The project's version v.0.0.1. */
        private     static      V_0_0_1                 :MfgVersion         = new MfgVersion( "0.0.1", "GAMBAZ", "30.04.2015, 17:18:34 GMT+1",   "Solved module usage. Simplified file-references/import-system via _references.ts. Refactor MfgPlayer. Implemented suitable images. Player now manages a sprite instead of an image. Reimplemented the Sprite system. Pruned block class. Implement horizontal and vertical scrolling. Improve parallax scrolling for 2nd background. Extract parallax scrolling to function in order to support various bg layers. Converted all classes to TypeScript." );

        /** The project's current version. */
        public      static      CURRENT_VERSION         :MfgVersion         = MfgVersion.V_0_0_1;

        /** This version's specifier. */
        private                 iVersion                :string             = null;
        /** This version's internal codename. */
        private                 iCodename               :string             = null;
        /** This version's completion date. */
        private                 iDate                   :string             = null;
        /** This version's changelog. */
        private                 iLog                    :string             = null;

        /*****************************************************************************
        *   Creates a project version.
        *
        *   @param aVersion     The version specifier.
        *   @param aCodename    The internal codename.
        *   @param aDate        The completion date.
        *   @param aLog         The changelog.
        *****************************************************************************/
        constructor( aVersion:string, aCodename:string, aDate:string, aLog:string )
        {
            this.iVersion  = aVersion;
            this.iCodename = aCodename;
            this.iDate     = aDate;
            this.iLog      = aLog;
        }

        /**************************************************************************************
        *   Returns a representation of the current project version and it's date.
        *
        *   @return A representation of the current project's version with it's timestamp.
        **************************************************************************************/
        public getVersionDescriptor():string
        {
            return ( "v. " + this.iVersion + ", " + this.iDate + ", [" + this.iCodename + "]" );
        }
    }
