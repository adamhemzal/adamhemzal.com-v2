/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/** 
 * FONTS
 * It's better to implement each font weight specifically. It'll save network bandwidth
*/
import "@fontsource/lexend-deca/300.css";
import "@fontsource/lexend-deca/500.css";
import "@fontsource/lexend-deca/700.css";

/**
 * GLOBAL STYLES
 */
import './src/styles/styles.css';

/**
 * REACT + COMPONENTS
 */
import React from "react";
import Layout from "./src/components/Layout";

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}