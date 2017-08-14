
    /*******************************************************************************************************************
    *   Contains the project history with all current and completed version information.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgVersion
    {
        /** The project's version v.0.0.1. */
        private     static      V_0_0_1                 :MfgVersion         = new MfgVersion( "0.0.1", "GAMBAZ", "07.08.2017, 10:18:34 GMT+1" );

        /** The project's current version. */
        public      static      CURRENT_VERSION         :MfgVersion         = MfgVersion.V_0_0_1;

        /** This version's specifier. */
        private                 iVersion                :string             = null;
        /** This version's internal codename. */
        private                 iCodename               :string             = null;
        /** This version's completion date. */
        private                 iDate                   :string             = null;

        /***************************************************************************************************************
        *   Creates a project version.
        *
        *   @param aVersion     The version specifier.
        *   @param aCodename    The internal codename.
        *   @param aDate        The completion date.
        ***************************************************************************************************************/
        constructor( aVersion:string, aCodename:string, aDate:string )
        {
            this.iVersion  = aVersion;
            this.iCodename = aCodename;
            this.iDate     = aDate;
        }

        /***************************************************************************************************************
        *   Returns a representation of the current project version and it's date.
        *
        *   @return A representation of the current project's version with it's timestamp.
        ***************************************************************************************************************/
        public getVersionDescriptor():string
        {
            return ( "v. " + this.iVersion + ", " + this.iDate + ", [" + this.iCodename + "]" );
        }
    }
