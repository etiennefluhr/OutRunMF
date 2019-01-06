
    require( '../css/global.less' );

    import * as outrun from '..';

    /** ****************************************************************************************************************
    *   The main class containing the point of entry and a single game instance.
    *
    *   =====================
    *   TODO Primal
    *   =====================
    *   TODO Clear all TODOs.
    *   TODO Add FPS counter via Lib.
    *   TODO Scale canvas to screen size .. update all dimensions on size rechange.
    *
    *   =====================
    *   TODO Secondary - game
    *   =====================
    *   TODO New images and sprites.
    *   TODO New stage system for creating different stages.
    *   TODO Extract level creation to separate Factory / StageBuilder class?
    *   TODO Add sound effects?
    *   TODO Add main menu?
    *******************************************************************************************************************/
    export class Main
    {
        /** The singleton instance of the game. */
        public      static          game                    :outrun.Game                = null;

        /** ************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
        public static main() : void
        {
            outrun.HTML.setTitle( outrun.SettingGame.APP_TITLE );
            outrun.HTML.setFavicon( 'favicon.ico' );

            Main.acclaim();

            Main.game = new outrun.Game();
            Main.game.init();
        }

        /** ************************************************************************************************************
        *   Acclaims the debug console.
        ***************************************************************************************************************/
        private static acclaim() : void
        {
            outrun.Debug.acclaim.log( outrun.SettingGame.APP_TITLE );

            outrun.Debug.acclaim.log( outrun.Version.getCurrent() );
            outrun.Debug.acclaim.log();
        }
    }