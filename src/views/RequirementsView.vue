<template>
  <div class="requirements container">
    <h3>{{ $t('pages.requirements.title') }}</h3>
    <i18n-t keypath="pages.requirements.description" tag="p" scope="global">
      <template #checklist>
        <ul>
          <li v-for="stage in stages.filter((s) => s !== 'singularity')" :key="stage">
            <IconComponent name="check" size="26" color="#10ac84" />
            <span>{{ $t(`pages.requirements.checklist.${stage}`) }}</span>
          </li>
        </ul>
      </template>
    </i18n-t>

    <div class="stages">
      <div class="stage military">{{ $t('pages.requirements.stages.military') }}</div>
      <IconComponent name="arrow-right" />
      <IconComponent name="arrow-down" class="mobile" />
      <div class="stage special">{{ $t('pages.requirements.stages.special') }}</div>
      <IconComponent name="arrow-right" />
      <IconComponent name="arrow-down" class="mobile" />
      <div class="stage shattered_gold">{{ $t('pages.requirements.stages.shattered_gold') }}</div>
      <IconComponent name="arrow-right" />
      <IconComponent name="arrow-down" class="mobile" />
      <div class="stage arclight">{{ $t('pages.requirements.stages.arclight') }}</div>
      <IconComponent name="arrow-right" />
      <IconComponent name="arrow-down" class="mobile" />
      <div class="stage tempest">{{ $t('pages.requirements.stages.tempest') }}</div>
      <IconComponent name="arrow-right" />
      <IconComponent name="arrow-down" class="mobile" />
      <div class="stage singularity">{{ $t('pages.requirements.stages.singularity') }}</div>
    </div>

    <h4>{{ $t('pages.requirements.table.title') }}</h4>
    <p>{{ $t('pages.requirements.table.subtitle') }}</p>
    <table>
      <thead>
      <tr>
        <th>{{ $t('pages.requirements.table.headers.stage') }}</th>
        <th>{{ $t('pages.requirements.table.headers.requirement') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="stage in stages" :key="stage">
        <td>
          <div class="inner">
            <div class="icon" :class="stage"></div>
            <span>{{ $t(`pages.requirements.stages.${stage}`) }}</span>
          </div>
        </td>
        <td>{{ $t(`pages.requirements.table.stage_requirements.${stage}`) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stages: ['military', 'special', 'shattered_gold', 'arclight', 'tempest', 'singularity'],
    }
  },
}
</script>

<style lang="scss" scoped>
p,
a,
ul {
  @media (min-width: $tablet) {
    font-size: 18px;
  }
}

ul {
  margin-left: 10px;

  li {
    align-items: center;
    display: flex;

    .icon-component {
      margin-right: 6px;
    }
  }
}

.stages {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 60px;

  @media (max-width: $tablet) {
    display: block;
  }

  .stage {
    background: $elevation-3-color;
    border-radius: $border-radius;
    cursor: default;
    font-weight: 600;
    flex-grow: 1;
    padding: 30px;
    text-align: center;
    transition: $transition;

    @media (min-width: $tablet) {
      &:hover {
        transform: translateY(-4%);
      }
    }

    @media (max-width: $tablet) {
      padding: 40px;
    }

    &.military {
      @include military-camouflage-background;
      color: white;
    }

    &.special {
      @include special-camouflage-background;
      color: black;
    }

    &.shattered_gold {
      @include shattered-gold-camouflage-background;
      color: black;
    }

    &.arclight {
      @include arclight-camouflage-background;
      color: black;
    }

    &.tempest {
      @include tempest-camouflage-background;
      color: white;
    }

    &.singularity {
      @include singularity-camouflage-background;
      color: white;
    }
  }

  .icon-component {
    opacity: 0.5;
    padding: 0 10px;

    @media (max-width: $tablet) {
      display: flex;
      justify-content: center;
      margin: 5px 0;

      &:not(.mobile) {
        display: none;
      }

      &.mobile {
        display: flex !important;
      }
    }

    &.mobile {
      display: none;
    }
  }
}

table > thead {
  @media (max-width: $tablet) {
    display: none;
  }
}

table > tbody > tr {
  @media (max-width: $tablet) {
    display: flex;
    flex-direction: column;
  }

  td {
    padding: 15px 10px;

    @media (max-width: $tablet) {
      &:first-child {
        padding-bottom: 5px;
      }

      &:last-child {
        padding-top: 0;
      }
    }

    &:first-child {
      .inner {
        align-items: center;
        display: flex;
        text-wrap: nowrap;

        .icon {
          $size: 20px;
          background: red;
          border-radius: $border-radius;
          display: block;
          height: $size;
          margin-right: 10px;
          width: $size;

          &.military {
            @include military-camouflage-background;
          }

          &.special {
            @include special-camouflage-background;
          }

          &.shattered_gold {
            @include shattered-gold-camouflage-background;
          }

          &.arclight {
            @include arclight-camouflage-background;
          }

          &.tempest {
            @include tempest-camouflage-background;
          }

          &.singularity {
            @include singularity-camouflage-background;
          }
        }
      }
    }
  }
}
</style>