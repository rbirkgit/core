/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 15C29.45 15 29 14.55 29 14C29 12.3 29.66 11.39 30.19 10.66C30.66 10.01 31 9.55 31 8.5C31 7.45 30.66 6.98 30.19 6.34C29.66 5.61 29 4.7 29 3C29 2.45 29.45 2 30 2C30.55 2 31 2.45 31 3C31 4.05 31.34 4.52 31.81 5.16C32.34 5.89 33 6.8 33 8.5C33 10.2 32.34 11.11 31.81 11.84C31.34 12.49 31 12.95 31 14C31 14.55 30.55 15 30 15Z"/><path d="M8 23C7.45 23 7 22.55 7 22V18C7 17.45 7.45 17 8 17C8.55 17 9 17.45 9 18V22C9 22.55 8.55 23 8 23Z"/><path d="M33.0001 33.9999C32.7401 33.9999 32.4901 33.8999 32.2901 33.7099L2.29006 3.70995C1.90006 3.31995 1.90006 2.68995 2.29006 2.29995C2.68006 1.90995 3.31006 1.90995 3.70006 2.29995L33.7001 32.2999C34.0901 32.6899 34.0901 33.3199 33.7001 33.7099C33.5001 33.9099 33.2501 33.9999 32.9901 33.9999H33.0001Z"/><path d="M23.13 19H30V21H25.13L27.13 23H31C31.55 23 32 22.55 32 22V18C32 17.45 31.55 17 31 17H21.13L23.13 19Z"/><path d="M22.3 21H4V19H20.3L18.3 17H3C2.45 17 2 17.45 2 18V22C2 22.55 2.45 23 3 23H24.3L22.3 21Z"/>',
  solid:
    '<path d="M30 15C29.45 15 29 14.55 29 14C29 12.3 29.66 11.39 30.19 10.66C30.66 10.01 31 9.55 31 8.5C31 7.45 30.66 6.98 30.19 6.34C29.66 5.61 29 4.7 29 3C29 2.45 29.45 2 30 2C30.55 2 31 2.45 31 3C31 4.05 31.34 4.52 31.81 5.16C32.34 5.89 33 6.8 33 8.5C33 10.2 32.34 11.11 31.81 11.84C31.34 12.49 31 12.95 31 14C31 14.55 30.55 15 30 15Z"/><path d="M33.0001 33.9999C32.7401 33.9999 32.4901 33.8999 32.2901 33.7099L2.29006 3.70995C1.90006 3.31995 1.90006 2.68995 2.29006 2.29995C2.68006 1.90995 3.31006 1.90995 3.70006 2.29995L33.7001 32.2999C34.0901 32.6899 34.0901 33.3199 33.7001 33.7099C33.5001 33.9099 33.2501 33.9999 32.9901 33.9999H33.0001Z"/><path d="M27.13 23H31C31.55 23 32 22.55 32 22V18C32 17.45 31.55 17 31 17H21.13L27.13 23Z"/><path d="M22.3 21L20.3 19L18.3 17H3C2.45 17 2 17.45 2 18V22C2 22.55 2.45 23 3 23H24.3L22.3 21ZM4 19H7V21H4V19Z"/>',
};

export const noSmokingIconName = 'noSmoking';
export const noSmokingIcon: IconShapeTuple = [noSmokingIconName, renderIcon(icon)];
