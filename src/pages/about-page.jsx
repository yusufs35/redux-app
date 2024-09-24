import React from 'react'
import { $t } from '../helpers/locale-helper'

export const AboutPage = () => {
  return (
    <>
      <p>{$t("about-highlight-text")}</p>

      <h2>{$t("who-we-are-title")}</h2>
      <p>{$t("who-we-are-text")}</p>

      <h2>{$t("our-values-title")}</h2>
      <ul>
        <li><strong>{$t("innovation-title")}</strong>: {$t("innovation-text")}</li>
        <li><strong>{$t("integrity-title")}</strong>: {$t("integrity-text")}</li>
        <li><strong>{$t("excellence-title")}</strong>: {$t("excellence-text")}</li>
        <li><strong>{$t("collaboration-title")}</strong>: {$t("collaboration-text")}</li>
      </ul>


    </>
  )
}
