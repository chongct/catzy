import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
  trigger("routeAnimations", [
    transition("AboutPage <=> ProductsPage", [
      style({ position: "relative" }),
      query(":enter, :leave", [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          "backface-visibility": "hidden",
          "transform-style": "preserve-3d"
        })
      ]),
      query(":enter", [
        style({ transform: "rotateY(180deg)" })
      ]),
      query(":leave", animateChild()),
      group([
        query(":leave", [
          animate("800ms ease-out", style({ transform: "rotateY(180deg)" }))
        ]),
        query(":enter", [
          animate("800ms ease-out", style({ transform: "rotateY(0deg)" }))
        ])
      ]),
      query(":enter", animateChild())
    ])
  ])
