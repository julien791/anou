# 04 · Data model

Shared contract between backend, frontend and content sessions. Changes need an ADR.

```
Region          id, name (north|east|south|west|centre), polygon
Property        id, code (short public), name, type (hotel|guesthouse|airbnb), region_id,
                lat, lng, host_user_id, welcome_md, wifi, checkin, checkout, rules_md,
                emergency_md, default_language
PropertyNotice  id, property_id, text, send_at, sent_at
Recommendation  id, property_id, listing_id?, free_text?, order
Guest           id (device), property_id, language, party_type, interests[], stay_start,
                stay_end, push_subscription_json?, notif_prefs_json, created_at
Listing         id, business_id?, name, mood[] (sea|land|food|culture|nightlife|slow),
                region_id, lat, lng, description_md, price_band (free|low|mid|high),
                hours_json, suitability_json (wind_max, rain_ok, needs_calm_sea, best_tide,
                sunset_side...), photos[], status
Event           id, listing_id?, title, starts_at, ends_at, region_id, price_band, kind
Business        id, name, tier (free|pro), stripe_customer_id?, users[]
Offer           id, business_id, listing_id, text, valid_from, valid_to, redemption_mode
Boost           id, business_id, listing_id, kind (brief_slot|tonight_slot|geofence),
                date, region_id, price, status
Stamp           id, number (1..12), name, story_md, kreol_word_id, lat, lng, radius_m,
                mode (qr|gps), station_business_id?, reward_text?
StampCollected  guest_id, stamp_id, collected_at, via
KreolWord       id, word, meaning_en, meaning_fr, example, audio_url, tags[]
DayConditions   region_id, date, wind_dir, wind_kts, rain_prob, temp_c, uv, swell_m,
                high_tides[], low_tides[], sunrise, sunset, advisories[]
Brief           id, date, kind (morning|tonight), region_id, segment_key, body_json,
                notification_text, generated_at
BriefDelivery   brief_id, guest_id, sent_at, opened_at?
```

Seed data lives in `content/` as YAML (one file per entity) and is loaded by
`apps/api/scripts/seed.ts`. The content session fills the YAML; it never touches the schema.
