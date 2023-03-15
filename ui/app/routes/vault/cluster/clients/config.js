/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ConfigRoute extends Route {
  @service store;

  model() {
    return this.store.queryRecord('clients/config', {});
  }
}
