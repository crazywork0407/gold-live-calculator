<?php
/**
 * Plugin Name: Gold.live Calculator
 * Plugin URI: https://github.com/WordPress/gutenberg
 * Description: Calculator plugin for Gold.live
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Version: 1.0.0
 * Author: Eugene Lee
 * Text Domain: gold-live-calculator
 *
 * @package gold.live
 */
define( 'GOLD_LIVE_CALC_VERSION', '1.0.0' );
define( 'GOLD_LIVE_CALC_PLUGIN_DIR', __DIR__ );
define( 'GOLD_LIVE_CALC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GOLD_LIVE_CALC_PLUGIN_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets' );

if ( ! class_exists( 'Gold_Live_Calculator' ) ) {
    class Gold_Live_Calculator {
        public function __construct() {
            add_shortcode( 'gold_live_calculator', array( $this, 'render' ) );
            
            add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ), 100 );
        }

        public function enqueue() {
            wp_enqueue_style( 'gold-live-calculator', GOLD_LIVE_CALC_PLUGIN_ASSETS_URL . '/css/style.css', array(), GOLD_LIVE_CALC_VERSION );
            wp_enqueue_script( 'gold-live-calculator-jquery-ui', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js', array('jquery-core'), '1.13.2' );
            wp_enqueue_script( 'gold-live-calculator', GOLD_LIVE_CALC_PLUGIN_ASSETS_URL . '/js/gold-live-calculator.js', array('jquery-core', 'gold-live-calculator-jquery-ui'), GOLD_LIVE_CALC_VERSION );
        }

        public function render() {
            ob_start();

            require_once 'gold-live-calculator-render.php';
            
            return ob_get_clean();
        }
    }
}

new Gold_Live_Calculator();