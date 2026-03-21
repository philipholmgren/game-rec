import type { GameCardItem, Genre, MaturityRating, Platform } from '../types';

export const genres: Genre[] = [
  { id: 'rpg', label: 'RPG', selected: true },
  { id: 'fps', label: 'FPS' },
  { id: 'indie', label: 'Indie', selected: true },
  { id: 'horror', label: 'Horror' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'souls-like', label: 'Souls-like' },
  { id: 'racing', label: 'Racing' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'mmo', label: 'MMO' },
  { id: 'visual-novel', label: 'Visual Novel' },
];

export const maturityRatings: MaturityRating[] = [
  { id: 'e', label: 'E', description: 'Everyone', selected: true },
  { id: 't', label: 'T', description: 'Teen' },
  { id: 'm', label: 'M', description: 'Mature' },
  { id: 'ao', label: 'AO', description: 'Adults Only' },
];

export const platforms: Platform[] = [
  { id: 'pc', label: 'PC', selected: true },
  { id: 'playstation', label: 'PlayStation', selected: true },
  { id: 'xbox', label: 'Xbox' },
  { id: 'switch', label: 'Switch' },
];

export const discoveredGames: GameCardItem[] = [
  {
    id: 1,
    title: 'Neon Overdrive',
    subtitle: 'High-Octane Synth Racer',
    match: '94% MATCH',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFoSiXjusy6cHBxTey4pv1BqGDPsAP4YYNyHiQ5ILoDnLzCARv8nbfmRagD4QmZiRuw9Acu5HeByM28mvj-mhzHLdmZ7uloWOBSh-riZJfyTRabOMJoVMhkTpNgMvN6KtEI65-jzwAU61dH9TscSvLprFz_l2-alDZh0cBGQnVbnnvt_K89xBVdGESbcOqImxuutU_Hu-0c_Q9P9bDQcCsY1cXaTVDwXnH_OGgcntTfLgjg8ZE2bipoo4a128lJbRJEkXpLANPhJtn',
    featured: true,
  },
  {
    id: 2,
    title: 'Void Shifter',
    subtitle: 'Existential Strategy Simulator',
    match: '78% MATCH',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkkw77IbSxHyoiUE5CMmSm014BdW0dNaSlo_48_NXn2vwtB_l3chldGh8XE-9Jh7SMF6mlMqySQuTVGIN325aUe90Fr4cDAEdFaGMVkV3nhPun0_jKJQmvOt6yNLxwvcj_MXRQo4W_yokVfxYqgZuPTsptMQ3EgQGk2pLO0gCOm2ZNkHJTH-Pu_dUgM0blb32ec9SZlgVNArnAHzxIVZRATql1CF6SIe18n12fcLx03dU2d5V_7u18qm9Uc4kyxIXOoZv8RSuOSG2B',
  },
  {
    id: 3,
    title: "Pixel Punk '88",
    subtitle: 'Retro-Indie Platformer',
    match: '89% MATCH',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYERZeAnAhpCdtWv_Vz6XiJMZ54rNH8Pslo8BSjZhjDoDMs-oMVS0MxWxiuYFYd9V6LlLW1nQh_qqrvh33wTNH5h2-djoKWS_VRhe8hMOa4CcqSakpY8Oz6cmlcN5unJ57rqecr4OGDl0p72yRPnxIAdBDfVIkL5-bewP5pnZ1wUS82q5mjGd_e-o46-BQkvc6yrChemmXypnbyUnvkLYND-mscURL8P-IqUwS_F9fE3pzJUzbUiicQKAYhTRTkxdO5vjgqyy4-XQt',
    featured: true,
  },
];