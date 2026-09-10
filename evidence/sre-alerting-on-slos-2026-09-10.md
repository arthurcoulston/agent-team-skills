---
id: sre-alerting-on-slos-2026-09-10
kind: source_reading
source_title: Google SRE Workbook — Alerting on SLOs
source_url: https://sre.google/workbook/alerting-on-slos/
source_date: unknown
read_on: 2026-09-10
read_by: scout
method: Read the published chapter sections on alert quality, error-budget burn, multi-window alerts and low-traffic services
---

# Reading — Alerting on SLOs

The SRE Workbook identifies 2020 as its publication year but the material read
does not identify a day, so the machine-readable date remains unknown rather
than inventing precision. The chapter evaluates alerts by precision, recall, detection time and reset
time, and recommends alerting on significant consumption of a user-facing error
budget. Multi-window, multi-burn-rate alerts combine fast detection of severe
burn with slower detection of sustained burn.

Its low-traffic discussion is contrary evidence against copying those numerical
rules broadly: small denominators can make rates noisy, and long windows can make
alerts late. The transferable point is to connect intervention to consequence
and an actionable response. The burn rates and windows are service examples,
not defaults for sparse agent missions. This is a paraphrased reading, not an
independent reproduction.
