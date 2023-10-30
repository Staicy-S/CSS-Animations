import "./Types.css";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Slider } from "../components/Slider";
// import { Select } from "../components/Select";
import Select from "react-select";

const types = {
  tween: {
    duration: {
      control: "slider",
      initial: 1,
      min: 0,
      max: 10,
      convert: (val) => val / 100,
    },
    ease: {
      control: "select",
      initial: "easeIn",
      options: ["easeIn", "easeOut"],
    },
  },
  spring: {
    mass: {
      control: "slider",
      initial: 2,
      min: 0,
      max: 10,
      convert: (val) => val,
    },
    stiffness: {
      control: "slider",
      initial: 2,
      min: 0,
      max: 10,
      convert: (val) => val,
    },
    damping: {
      control: "slider",
      initial: 2,
      min: 0,
      max: 10,
      convert: (val) => val,
    },
    velocity: {
      control: "slider",
      initial: 2,
      min: 0,
      max: 10,
      convert: (val) => val,
    },
  },
};

function createAnimationState(newType) {
  return {
    animationType: newType,
    settings: Object.entries(types[newType]).reduce((acc, cur) => {
      return {
        ...acc,
        [cur[0]]: { ...cur[1], current: cur[1].initial },
      };
    }, {}),
  };
}

export function Types() {
  const animationControls = useAnimation();
  const [animationState, setAnimationsState] = useState(() =>
    createAnimationState(Object.keys(types)[0])
  );

  return (
    <>
      <h1>Types</h1>
      <Select
        classNames={{
          option: (state) => {
            console.log(state);
            return state.isSelected
              ? "select__option--highlight"
              : "select__option";
          },
        }}
        defaultValue={{
          value: animationState.animationType,
          label: animationState.animationType,
        }}
        options={Object.keys(types).map((type) => {
          return {
            value: type,
            label: type,
          };
        })}
        onChange={(newType) => {
          setAnimationsState(createAnimationState(newType.value));
        }}
      >
        {Object.keys(types).map((key) => {
          return (
            <option key={key} value={key}>
              {key}
            </option>
          );
        })}
      </Select>
      <div className="animation-container">
        <motion.div className="ball" animate={animationControls} />
        <div className="animation-controls">
          {Object.entries(animationState.settings).map((controlSettings) => {
            const [key, settings] = controlSettings;
            switch (settings.control) {
              case "slider":
                return (
                  <div key={key} className="animation-control-container">
                    <p style={{ flexBasis: 120 }}>{key}</p>
                    <Slider
                      value={settings.current}
                      min={settings.min}
                      max={settings.max}
                      onChange={(newValue) =>
                        setAnimationsState({
                          ...animationState,
                          settings: {
                            ...animationState.settings,
                            [key]: {
                              ...animationState.settings[key],
                              current: Number(newValue),
                            },
                          },
                        })
                      }
                    />
                  </div>
                );
              case "select":
                return (
                  <div key={key} className="animation-control-container">
                    <p style={{ flexBasis: 120 }}>{key}</p>
                    <Select
                      classNames={{
                        option: (state) => {
                          console.log(state);
                          return state.isSelected
                            ? "select__option--highlight"
                            : "select__option";
                        },
                      }}
                      defaultValue={{
                        value: settings.current,
                        label: settings.current,
                      }}
                      options={settings.options.map((option) => ({
                        value: option,
                        label: option,
                      }))}
                      onChange={(newSelection) =>
                        setAnimationsState({
                          ...animationState,
                          settings: {
                            ...animationState.settings,
                            [key]: {
                              ...animationState.settings[key],
                              current: newSelection.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                );
              default:
                return <></>;
            }
          })}
        </div>
      </div>
      <button
        onClick={() => {
          const transition = {
            type: animationState.animationType,
            ...Object.entries(animationState.settings).reduce((acc, cur) => {
              return {
                ...acc,
                [cur[0]]: cur[1].current,
              };
            }, {}),
          };
          console.log(transition);
          animationControls.start({
            x: [0, 400, 0],
            transition,
          });
        }}
      >
        Start Animation
      </button>
      {/* <p>{JSON.stringify(animationState)}</p> */}
    </>
  );
}
