import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

zoneConfig.global.disable.requestAnimationFrame();
zoneConfig.global.disable.timers();
