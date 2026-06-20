#!/bin/bash

# Copy all V1 components to V3 and V4, replacing imports
for component in WhatYouLearnSection ComparisonSection SocialProofSection FinalCTASection; do
  # V3
  sed 's/CTAButtonV1/CTAButtonV3/g; s/from "\.\/CTAButtonV1"/from ".\/CTAButtonV3"/g' components/${component}.tsx > components/${component}V3.tsx
  sed -i 's/CTAButtonV1/CTAButtonV3/g' components/${component}V3.tsx
  
  # V4
  sed 's/CTAButtonV1/CTAButtonV4/g; s/from "\.\/CTAButtonV1"/from ".\/CTAButtonV4"/g' components/${component}.tsx > components/${component}V4.tsx
  sed -i 's/CTAButtonV1/CTAButtonV4/g' components/${component}V4.tsx
  
  echo "✅ Created ${component}V3.tsx and ${component}V4.tsx"
done

# Create HomeV3
sed 's/HeroSection/HeroSectionV3/g; s/WhatYouLearnSection/WhatYouLearnSectionV3/g; s/ComparisonSection/ComparisonSectionV3/g; s/SocialProofSection/SocialProofSectionV3/g; s/FinalCTASection/FinalCTASectionV3/g' pages/Home.tsx > pages/HomeV3.tsx
sed -i 's/from "\.\.\/components\/HeroSection"/from "..\/components\/HeroSectionV3"/g' pages/HomeV3.tsx
sed -i 's/from "\.\.\/components\/WhatYouLearnSection"/from "..\/components\/WhatYouLearnSectionV3"/g' pages/HomeV3.tsx
sed -i 's/from "\.\.\/components\/ComparisonSection"/from "..\/components\/ComparisonSectionV3"/g' pages/HomeV3.tsx
sed -i 's/from "\.\.\/components\/SocialProofSection"/from "..\/components\/SocialProofSectionV3"/g' pages/HomeV3.tsx
sed -i 's/from "\.\.\/components\/FinalCTASection"/from "..\/components\/FinalCTASectionV3"/g' pages/HomeV3.tsx

# Create HomeV4
sed 's/HeroSection/HeroSectionV4/g; s/WhatYouLearnSection/WhatYouLearnSectionV4/g; s/ComparisonSection/ComparisonSectionV4/g; s/SocialProofSection/SocialProofSectionV4/g; s/FinalCTASection/FinalCTASectionV4/g' pages/Home.tsx > pages/HomeV4.tsx
sed -i 's/from "\.\.\/components\/HeroSection"/from "..\/components\/HeroSectionV4"/g' pages/HomeV4.tsx
sed -i 's/from "\.\.\/components\/WhatYouLearnSection"/from "..\/components\/WhatYouLearnSectionV4"/g' pages/HomeV4.tsx
sed -i 's/from "\.\.\/components\/ComparisonSection"/from "..\/components\/ComparisonSectionV4"/g' pages/HomeV4.tsx
sed -i 's/from "\.\.\/components\/SocialProofSection"/from "..\/components\/SocialProofSectionV4"/g' pages/HomeV4.tsx
sed -i 's/from "\.\.\/components\/FinalCTASection"/from "..\/components\/FinalCTASectionV4"/g' pages/HomeV4.tsx

echo "✅ Created HomeV3.tsx and HomeV4.tsx"
