import Ember from 'ember';
import addOptionsToScale from '../utils/add-options-to-scale';
import addOptionsToOrdinalScale from '../utils/add-options-to-ordinal-scale';
import guidDomainScale from '../utils/guid-domain-scale';
import d3Scale from 'ember-d3-scale';

export function bandScale([domain, range], hash) {
  let scale = guidDomainScale(d3Scale.scaleBand());
  addOptionsToScale(scale, domain, range, hash);
  addOptionsToOrdinalScale(scale, hash);
  return scale;
}

export default Ember.Helper.helper(bandScale);